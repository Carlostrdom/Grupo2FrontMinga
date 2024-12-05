import React from "react";

const CardMangas = () => {
  const mangas = [
    {
      title: "Naruto Volume 41",
      genre: "Shonen",
      typeColor: "text-orange-500",
      borderColor: "border-orange-500",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/bb8c/3519/adeab260a8d87012b015116913b2b459?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U4SNqvMIBXd1JZgR6ZFwMf5-aixvwXzOvRZJpERgZKs1ZS-csN~x1MLgVyXt2kZV066YErEsdvRJ03ukT0rXgQjbtHTlq3roXuQxfeSnDmOWpljO-XMX0lzmMIcdXD1WDUrARLfJat~pkxUf3DUgL1GOx324-1xQ0OP8mmDTIIucIbsZFjcONWQzUol~rMg0IlZfGkKP7dncGE8F7144KCisih5aF3UCQNvtrqMYjDmwlxb9VSM8tbXk-Tsl1uZzzLP-tMatgLJ1g2nrKMdSxnFCMDUeIdTsPuu3fncI-kHECAOjlUqEtJkSDsaioXplxEmlWa7mJ1JAPKNKVEzRuw__",
    },
    {
      title: "Maximum Gantz",
      genre: "Seinen",
      typeColor: "text-yellow-500",
      borderColor: "border-yellow-500",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/3b24/07d1/72aa2085964c1a00743ff6df0777ba98?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcrRfHaDRmnzciJfB~eJwTAe07ApN6XkQo-LjHqgN6lCHVAfuJQoMaNgWkIYQ1abQleugtlUmrSUuFF~l7Lrf8AU2f-kMrPM8BvMYqLX6SvEWo5pelcQVuf3M4AvEb~JW0SwAXSOOORJyt-LRLDEG5y12DozKm~SClZzQhcaov8lk9Lm4OCJ5EHpL3qsS9fjxj-sMProthEPkS83QWN8XITbkCN1OnsG7zg0Ec8-EFg2lZ-XBcSgKLR4K2Ms-amScNId~cIMujtfiKNhOw40X4P1PYMNvai2TOPw0olm-vThCeC~3YJV3cqAndgpGwUgFRT10QWQ-Jk-JAVS3AUMjg__",
    },
    {
      title: "Rosario To Vampire",
      genre: "Shonen",
      typeColor: "text-pink-500",
      borderColor: "border-pink-500",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/857a/faad/bf463ab65c94dc3d3683ba5c3a1341f0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fV7BJ8Ac1dGfhApVFyjgeeMU1iLyubgGOimyrkChsLVhdUyjTZfRKHIWg5VKd5CSVyCu8SRJOlvLx8UOKGW-0KkilnOjyTXABmUOU69iXJiEBQ1tRl3G8AxFsZqYZN0wQyRIF7riHQOlUYcWyKe7SB5VjXViaVvWSIlW5Tx8EHCnWT2kaFQICbo25S~iIXt~XRcGl4fWJfoqMzKjsPtXOuCajAgNG8TXWEDVSHaPgdOxzhadUmd7itgpc~AUyJ1sXGjUokHhtlkRS6PKLm4OKZBWPtnlj7bkOWjuW2xa2gZMVl1iyFhhv4i~UhiAtsqwRgfUKHnfGP9-IjxtCaoRHg__",
    },
    {
      title: "Vampire Knight Memories",
      genre: "Shojo",
      typeColor: "text-purple-500",
      borderColor: "border-purple-500",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4f5a/f17e/25dce202e231c6ca580ee58d6184a205?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIEBOcwivhjisQ7xe4NRCejIm7znw8ky20zk-quMXXweHKU3nF~MIVt~AGo-d-DWR5b4dlzx4c01RZ3SSoohi7DxJ258nLCUo9Rwqc5yCaZCjsi2oBq3CSxEc1NWFLw~w9m7dxHg0mN6sJC6pOiZWqYHcPxyeyQ-j7GMP4Ke4HgzekO4YHtSfe8SXRC0Q6l3ffQXTLJGkqoJNC0CjnvsjdlKYotGZLDekdfmBrbCzuJYAw6fwPkIb7zwWJwXBOrKOgKchVkopofgOh3QobuhZZK3ONChfa25GwWDICJ8RvPzcVA3ZtAvgZY5HSAj1UmiFjHmOYwP~lQ7XSYkwOp66A__",
    },
  ];

  return (
    <div className="relative -mt-12 px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-[90%] mx-auto relative z-10">
        <div className="flex pt-6 gap-4 mb-6 ml-44">
          <button className="px-4 py-2 rounded-lg bg-gray-900 text-white">All</button>
          <button className="px-4 py-2 rounded-lg bg-red-200 text-gray-700">Shonen</button>
          <button className="px-4 py-2 rounded-lg bg-yellow-200 text-gray-700">Seinen</button>
          <button className="px-4 py-2 rounded-lg bg-green-200 text-gray-700">Shojo</button>
          <button className="px-4 py-2 rounded-lg bg-purple-200 text-gray-700">Kodomo</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {mangas.map((manga, index) => (
            <div
              key={index}
              className={`w-[90%] md:w-[402px] h-[178px] bg-white shadow-md rounded-lg flex overflow-hidden border-l-4 ${manga.borderColor}`}
            >
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{manga.title}</h3>
                  <p className="text-sm text-gray-500">{manga.genre}</p>
                  <p className={`text-sm ${manga.typeColor}`}>Type</p>
                </div>
                <button className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full self-start">
                  Read
                </button>
              </div>
              <div className="w-1/3 h-full overflow-hidden relative">
                <img
                  src={manga.imageUrl}
                  alt={manga.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-l-full rounded-r-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMangas;
