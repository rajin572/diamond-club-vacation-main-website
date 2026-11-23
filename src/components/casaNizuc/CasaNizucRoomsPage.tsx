import { DetailHero, RoomCard, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import { BookRoomButton, ResortDetailView } from "@/components/resorts";
import type { ResortDetailItem } from "@/components/resorts/resorts.types";
import { CASA_NIZUC_DATA } from "@/data/resorts/casa-nizuc.data";
import { BLUE_DATA } from "@/data/programs/blue.data";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { BOOK_STAY_HREF, CASA_NIZUC_ROOMS_HREF, CASA_NIZUC_SUB_NAV, casaNizucRoomHref } from "./casaNizucNav";

/**
 * The rooms are the same as on Passover → Diamond Blue → Casa Nizuc (one data source, `casa-nizuc.data.ts`): the year-round pages show
 * them on this site, and only the "Book" buttons open Marriott (client 2026-11-23).
 */
const ROOMS = CASA_NIZUC_DATA.rooms;

export function getCasaNizucRoom(roomId: string): ResortDetailItem | undefined {
  return ROOMS.items.find((room) => room.id === roomId);
}

export const CASA_NIZUC_ROOM_IDS = ROOMS.items.map((room) => room.id);

/** /casa-nizuc/rooms: every room and suite, each with its details page and its own "Book this room" button. */
export function CasaNizucRoomsPage() {
  return (
    <>
      <DetailHero
        image={CASA_NIZUC_PAGE.hero.image}
        imagePosition="center 40%"
        kicker="Casa Nizuc Resort & Spa"
        title={ROOMS.title}
        actions={<BookRoomButton href={BOOK_STAY_HREF} label="Book your stay" />}
      />
      <SubNav items={CASA_NIZUC_SUB_NAV} label="Casa Nizuc sections" />

      <Wrap id="rooms" className="dcv-wrap--stack">
        <SectionTitle title={ROOMS.title} description={ROOMS.description} />
        <div className="dcv-roomlist">
          {ROOMS.items.map((room) => (
            <RoomCard
              key={room.id}
              image={room.image}
              alt={room.title}
              title={room.title}
              meta={room.subtitle}
              href={casaNizucRoomHref(room.id)}
              action={<BookRoomButton href={BOOK_STAY_HREF} title={room.title} />}
            />
          ))}
        </div>
      </Wrap>
    </>
  );
}

/** /casa-nizuc/rooms/[room]: the Passover room page layout with the year-round tab bar, a way back to the rooms and a booking button. */
export function CasaNizucRoomPage({ room }: { room: ResortDetailItem }) {
  return (
    <ResortDetailView
      offeringId={BLUE_DATA.offeringId}
      programId={CASA_NIZUC_DATA.programId}
      data={CASA_NIZUC_DATA}
      item={room}
      kind="room"
      navItems={CASA_NIZUC_SUB_NAV}
      back={{ href: CASA_NIZUC_ROOMS_HREF, label: "All Rooms" }}
      heroActions={<BookRoomButton href={BOOK_STAY_HREF} title={room.title} />}
    />
  );
}
